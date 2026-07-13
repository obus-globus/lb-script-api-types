import type { Object } from '../java/lang/Object.d.ts'
export abstract class ServiceMethod<T extends unknown> extends Object {
    constructor()
    invoke(arg0: Object, arg1: Object[]): T;
}