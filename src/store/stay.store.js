import { stayService } from '../services/stay.service.js';
// import { socketService, SOCKET_EVENT_REVIEW_ADDED, SOCKET_EVENT_REVIEW_ABOUT_YOU } from '../services/socket.service'

export const stayStore = {
    state: {
        currStay: null,
        stays: [],
        currStayReviews: [],
        filterBy: { type: '', city: '', price: '' }, //minPrice: '', maxPrice: ''
    },
    getters: {
        showCurrStay(state) {
            return state.currStay;
        },
        stays(state) {
            return state.stays;
        },
        // staysToShow(state) {
        //     let filteredstays = state.stays;
        //     console.log(filteredstays);
        //     return filteredstays
        // },

        avgStayRate(state) {
            var reviews = state.currStay.reviews;
            let sum = reviews.reduce((sum, review) => {
                sum += review.rate;
                return sum;
            }, 0);
            return sum / reviews.length;
        },
        isLoading({ isLoading }) {
            return isLoading
        },
    },
    actions: {
        loadStays({ commit, state }) {
            var filterBy = state.filterBy ? state.filterBy : ''
            commit({ type: 'setLoading', isLoading: true })
            staysService
                .query(filterBy)
                .then((stays) => {
                    commit({ type: 'setStays', stays })
                })
                .finally(() => {
                    commit({ type: 'setLoading', isLoading: false })
                })
        },
    },
    mutations: {
        setLoading(state, { isLoading }) {
            state.isLoading = isLoading
        },
        setStays(state, { stays }) {
            state.stays = stays;
        },
        setCurrStay(state, { stay }) {
            state.currStay = stay;
        },

        addStay(state, { stay }) {
            state.stays.push(stay);
        },
        removeStay(state, { stayId }) {
            state.stays = state.stays.filter((stay) => stay._id !== stayId);
        },
        setStayReviews(state, { stay }) {
            state.currStayReviews = stay.reviews;
        },
        setFilter(state, { filterBy }) {
            console.log(filterBy);
            if (filterBy.filterType === 'city') state.filterBy.city = filterBy.filter;
            else if (filterBy.filterType === 'type') state.filterBy.type = filterBy.filter;
            else if (filterBy.filterType === 'price') state.filterBy.price = filterBy.filter;
            console.log(state.filterBy);
        },
        clearFilter(state) {
            state.filterBy = { type: '', city: '', price: '' }
        }
    },
    actions: {
        async addStay(context, { stay }) {
            try {
                stay = await stayService.add(stay);
                context.commit({ type: 'addStay', stay });
                context.dispatch({ type: 'increaseScore' });

                return stay;
            } catch (err) {
                console.log('stayStore: Error in addStay', err);
                throw err;
            }
        },
        async loadStay(context, { stayId }) {
            try {
                const stay = await stayService.getById(stayId);
                // console.log(stay);
                context.commit({ type: 'setCurrStay', stay });
                // socketService.off(SOCKET_EVENT_REVIEW_ADDED)
                // socketService.on(SOCKET_EVENT_REVIEW_ADDED, stay => {
                // //     console.log('Got stay from socket', stay);
                //     context.commit({ type: 'addStay', stay })
                // })
                // socketService.off(SOCKET_EVENT_REVIEW_ABOUT_YOU)
                // socketService.on(SOCKET_EVENT_REVIEW_ABOUT_YOU, stay => {
                //     console.log('Stay about me!', stay);

                // })
            } catch (err) {
                console.log('stayStore: Error in loadStay', err);
                throw err;
            }
        },
        async loadStays(context) {
            console.log(context.state.filterBy);
            try {
                const stays = await stayService.query(context.state.filterBy);
                context.commit({ type: 'setStays', stays });
            } catch (err) {
                console.log('stayStore: Error in loadStays', err);
                throw err;
            }
        },
        async removeStay(context, { stayId }) {
            try {
                await stayService.remove(stayId);
                context.commit({ type: 'removeStay', stayId });
            } catch (err) {
                console.log('stayStore: Error in removeStay', err);
                throw err;
            }
        },
        setFilter({ commit, dispatch }, { filterBy }) {
            console.log(filterBy);
            commit({ type: 'setFilter', filterBy })
            dispatch({ type: 'loadStays' })
        },
        clearFilter({ commit, dispatch }) {
            commit({ type: 'clearFilter' })
            dispatch({ type: 'loadStays' })
        }
    },
};
