import type { ObjectStreamClass } from '../../java/io/ObjectStreamClass.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export abstract class ObjectInputStream$GetField extends Object {
    constructor()
    defaulted(arg0: string): boolean;
    get(arg0: string, arg1: Object): Object;
    get(arg0: string, arg1: boolean): boolean;
    get(arg0: string, arg1: number): number;
    get(arg0: string, arg1: string): string;
    getObjectStreamClass(): ObjectStreamClass;
}