import type { MethodHandles$Lookup } from '../../../java/lang/invoke/MethodHandles$Lookup.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Unsafe } from '../../../sun/misc/Unsafe.d.ts'
export class JavaBypass extends Object {
    static INTERNAL_UNSAFE: Object;
    static TRUSTED_LOOKUP: MethodHandles$Lookup;
    static UNSAFE: Unsafe;
    static clearReflectionFilter(): void;
    static getInternalUnsafe(): Object;
    static getTrustedLookup(): MethodHandles$Lookup;
    static getUnsafe(): Unsafe;
    constructor()
}