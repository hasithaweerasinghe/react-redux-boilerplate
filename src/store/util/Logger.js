const logger = store => {
    return next => {
        return action => {
            console.log('[Logger] Dispatching', action);
            const result = next(action);
            console.log('[Logger] next state', store.getState());
            return result;
        }
    }
}

export default logger;