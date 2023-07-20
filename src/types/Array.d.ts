interface Array<T> {
    findIndex(predicate: (search: T) => boolean | undefined): number;
    find(predicate: (search: T) => boolean | undefined): T | undefined;
}