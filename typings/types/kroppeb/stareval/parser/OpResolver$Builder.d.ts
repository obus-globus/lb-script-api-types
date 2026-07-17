import type { JavaMap } from '../../../JavaMap.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { OpResolver } from '../../../kroppeb/stareval/parser/OpResolver.d.ts'
export class OpResolver$Builder<T extends unknown> extends Object {
    constructor()
    // private map: JavaMap<string, T>;
    build(): OpResolver<T>;
    multiChar(arg0: string, arg1: T): void;
    singleChar(arg0: T): void;
}