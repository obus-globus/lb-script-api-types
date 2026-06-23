import type { Optic } from '../../../com/mojang/datafixers/optics/Optic.d.ts'
import type { Type } from '../../../com/mojang/datafixers/types/Type.d.ts'
import type { Record } from '../../../java/lang/Record.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class TypedOptic$Element<S extends unknown, T extends unknown, A extends unknown, B extends unknown> extends Record {
    constructor(sType: Type<S>, tType: Type<T>, aType: Type<A>, bType: Type<B>, optic: Optic<any, S, T, A, B>)
    // private aType: Type<A>;
    // private bType: Type<B>;
    // private optic: Optic<any, S, T, A, B>;
    // private sType: Type<S>;
    // private tType: Type<T>;
    aType(): Type<A>;
    bType(): Type<B>;
    castOuterUnchecked<S2 extends unknown, T2 extends unknown>(arg0: Type<S2>, arg1: Type<T2>): TypedOptic$Element<S2, T2, A, B>;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    optic(): Optic<any, S, T, A, B>;
    sType(): Type<S>;
    tType(): Type<T>;
    toString(): string;
}