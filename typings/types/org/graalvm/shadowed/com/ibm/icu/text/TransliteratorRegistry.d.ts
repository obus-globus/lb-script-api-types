import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { StringBuffer } from '../../../../../../../java/lang/StringBuffer.d.ts'
import type { Enumeration } from '../../../../../../../java/util/Enumeration.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Transliterator } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/Transliterator.d.ts'
import type { Transliterator$Factory } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/Transliterator$Factory.d.ts'
import type { TransliteratorRegistry$Spec } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/TransliteratorRegistry$Spec.d.ts'
import type { CaseInsensitiveString } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/CaseInsensitiveString.d.ts'
export class TransliteratorRegistry extends Object {
    constructor()
    readonly availableIDs: CaseInsensitiveString[];
    // private registry: JavaMap<CaseInsensitiveString, Object[]>;
    // private specDAG: JavaMap<CaseInsensitiveString, JavaMap<CaseInsensitiveString, CaseInsensitiveString[]>>;
    // private find(ID: string): Object[];
    // private find(source: string, target: string, variant: string): Object[];
    // private findInBundle(specToOpen: TransliteratorRegistry$Spec, specToFind: TransliteratorRegistry$Spec, variant: string, direction: number): Object[];
    // private findInDynamicStore(src: TransliteratorRegistry$Spec, trg: TransliteratorRegistry$Spec, variant: string): Object[];
    // private findInStaticStore(src: TransliteratorRegistry$Spec, trg: TransliteratorRegistry$Spec, variant: string): Object[];
    get(ID: string, aliasReturn: StringBuffer): Transliterator;
    getAvailableIDs(): Enumeration<string>;
    getAvailableSources(): Enumeration<string>;
    getAvailableTargets(source: string): Enumeration<string>;
    getAvailableVariants(source: string, target: string): Enumeration<string>;
    // private instantiateEntry(ID: string, entryWrapper: Object[], aliasReturn: StringBuffer): Transliterator;
    put(ID: string, transliteratorSubclass: Class<Transliterator>, visible: boolean): void;
    put(ID: string, alias: string, visible: boolean): void;
    put(ID: string, resourceName: string, dir: number, visible: boolean): void;
    put(ID: string, trans: Transliterator, visible: boolean): void;
    put(ID: string, factory: Transliterator$Factory, visible: boolean): void;
    // private registerEntry(ID: string, entry: Object, visible: boolean): void;
    // private registerEntry(source: string, target: string, variant: string, entry: Object, visible: boolean): void;
    // private registerEntry(ID: string, source: string, target: string, variant: string, entry: Object, visible: boolean): void;
    // private registerSTV(source: string, target: string, variant: string): void;
    remove(ID: string): void;
    // private removeSTV(source: string, target: string, variant: string): void;
}