import type { ObjectOutput } from '../../java/io/ObjectOutput.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export abstract class ObjectOutputStream$PutField extends Object {
    constructor()
    put(arg0: string, arg1: Object): void;
    put(arg0: string, arg1: boolean): void;
    put(arg0: string, arg1: number): void;
    put(arg0: string, arg1: string): void;
    put(arg0: string, arg1: number): void;
    put(arg0: string, arg1: number): void;
    put(arg0: string, arg1: number): void;
    put(arg0: string, arg1: number): void;
    put(arg0: string, arg1: number): void;
    write(arg0: ObjectOutput): void;
}