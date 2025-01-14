const useLocalStorage = () => {
    function setItem(key: string, item: string) {
        if (typeof window !== 'undefined') {
            localStorage.setItem(key, item);
        }
    }
    function getItem(key: string) {
        if (typeof window !== 'undefined') {
            return localStorage.getItem(key);
        }
        return null;
    }
    function removeItem(key: string) {
        if (typeof window !== 'undefined') {
            localStorage.removeItem(key);
        }
    }

    return {
        setItem,
        getItem,
        removeItem,
    };
};

export default useLocalStorage;
