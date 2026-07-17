import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Transliterator } from '../../../../com/ibm/icu/text/Transliterator.d.ts'
import type { Transliterator$Factory } from '../../../../com/ibm/icu/text/Transliterator$Factory.d.ts'
import type { TransliteratorRegistry$Spec } from '../../../../com/ibm/icu/text/TransliteratorRegistry$Spec.d.ts'
import type { CaseInsensitiveString } from '../../../../com/ibm/icu/util/CaseInsensitiveString.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { StringBuilder } from '../../../../java/lang/StringBuilder.d.ts'
import type { Enumeration } from '../../../../java/util/Enumeration.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class TransliteratorRegistry extends Object {
    constructor()
    readonly availableIDs: CaseInsensitiveString[];
    // private registry: JavaMap<CaseInsensitiveString, Object[]>;
    // private specDAG: JavaMap<CaseInsensitiveString, JavaMap<CaseInsensitiveString, CaseInsensitiveString[]>>;
    // private find(arg0: string): Object[];
    // private find(arg0: string, arg1: string, arg2: string): Object[];
    // private findInBundle(arg0: TransliteratorRegistry$Spec, arg1: TransliteratorRegistry$Spec, arg2: string, arg3: number): Object[];
    // private findInDynamicStore(arg0: TransliteratorRegistry$Spec, arg1: TransliteratorRegistry$Spec, arg2: string): Object[];
    // private findInStaticStore(arg0: TransliteratorRegistry$Spec, arg1: TransliteratorRegistry$Spec, arg2: string): Object[];
    get(arg0: string, arg1: StringBuilder): Transliterator;
    getAvailableIDs(): Enumeration<string>;
    getAvailableSources(): Enumeration<string>;
    getAvailableTargets(arg0: string): Enumeration<string>;
    getAvailableVariants(arg0: string, arg1: string): Enumeration<string>;
    // private instantiateEntry(arg0: string, arg1: Object[], arg2: StringBuilder): Transliterator;
    put(arg0: string, arg1: Transliterator, arg2: boolean): void;
    put(arg0: string, arg1: Transliterator$Factory, arg2: boolean): void;
    put(arg0: string, arg1: Class<Transliterator>, arg2: boolean): void;
    put(arg0: string, arg1: () => string, arg2: number, arg3: boolean): void;
    put(arg0: string, arg1: string, arg2: boolean): void;
    put(arg0: string, arg1: string, arg2: number, arg3: boolean): void;
    // private registerEntry(arg0: string, arg1: Object, arg2: boolean): void;
    // private registerEntry(arg0: string, arg1: string, arg2: string, arg3: Object, arg4: boolean): void;
    // private registerEntry(arg0: string, arg1: string, arg2: string, arg3: string, arg4: Object, arg5: boolean): void;
    // private registerSTV(arg0: string, arg1: string, arg2: string): void;
    remove(arg0: string): void;
    // private removeSTV(arg0: string, arg1: string, arg2: string): void;
}