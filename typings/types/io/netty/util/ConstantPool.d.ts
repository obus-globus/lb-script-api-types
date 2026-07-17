import type { JavaMap } from '../../../JavaMap.d.ts'
import type { Constant } from '../../../io/netty/util/Constant.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { AtomicInteger } from '../../../java/util/concurrent/atomic/AtomicInteger.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class ConstantPool<T extends Constant<T>> extends Object {
    constructor()
    // private constants: JavaMap<string, T>;
    // private nextId: AtomicInteger;
    // private createOrThrow(arg0: string): T;
    exists(arg0: string): boolean;
    // private getOrCreate(arg0: string): T;
    newConstant(arg0: number, arg1: string): T;
    newInstance(arg0: string): T;
    nextId(): number;
    valueOf(arg0: Class<Object>, arg1: string): T;
    valueOf(arg0: string): T;
}