import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class ImageSingletonsSupport extends Object {
    static get(): ImageSingletonsSupport;
    static isInstalled(): boolean;
    constructor()
    add<T extends Object | number | string | boolean>(key: Class<T>, value: T): void;
    contains(key: Class<Object>): boolean;
    lookup<T extends Object | number | string | boolean>(key: Class<T>): T;
}