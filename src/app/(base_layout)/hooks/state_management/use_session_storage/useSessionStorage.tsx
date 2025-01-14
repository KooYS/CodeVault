const useSessionStorage = () => {
    function setItem(key: string, item: string) {
        if (typeof window !== 'undefined') {
            sessionStorage.setItem(key, item);
        }
    }
    function getItem(key: string) {
        if (typeof window !== 'undefined') {
            return sessionStorage.getItem(key);
        }
        return null;
    }
    function removeItem(key: string) {
        if (typeof window !== 'undefined') {
            sessionStorage.removeItem(key);
        }
    }

    function getSession() {
        return Object.entries(sessionStorage);
    }
    return {
        setItem,
        getItem,
        removeItem,
        getSession,
    };
};

export default useSessionStorage;
