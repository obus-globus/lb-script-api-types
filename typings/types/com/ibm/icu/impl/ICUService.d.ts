import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { ICUNotifier } from '../../../../com/ibm/icu/impl/ICUNotifier.d.ts'
import type { ICURWLock } from '../../../../com/ibm/icu/impl/ICURWLock.d.ts'
import type { ICUService$CacheEntry } from '../../../../com/ibm/icu/impl/ICUService$CacheEntry.d.ts'
import type { ICUService$Factory } from '../../../../com/ibm/icu/impl/ICUService$Factory.d.ts'
import type { ICUService$Key } from '../../../../com/ibm/icu/impl/ICUService$Key.d.ts'
import type { ICUService$LocaleRef } from '../../../../com/ibm/icu/impl/ICUService$LocaleRef.d.ts'
import type { ULocale } from '../../../../com/ibm/icu/util/ULocale.d.ts'
import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { EventListener } from '../../../../java/util/EventListener.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ICUService extends ICUNotifier {
    constructor()
    constructor(arg0: string)
    // private cache: JavaMap<string, ICUService$CacheEntry>;
    // private defaultSize: number;
    // private dnref: ICUService$LocaleRef;
    // private factories: ICUService$Factory[];
    // private factoryLock: ICURWLock;
    // private idcache: JavaMap<string, ICUService$Factory>;
    readonly name: string;
    acceptsListener(arg0: EventListener): boolean;
    clearCaches(): void;
    clearServiceCache(): void;
    createKey(arg0: string): ICUService$Key;
    factories(): ICUService$Factory[];
    get(arg0: string): Object;
    get(arg0: string, arg1: string[]): Object;
    getDisplayName(arg0: string): string;
    getDisplayName(arg0: string, arg1: ULocale): string;
    getDisplayNames(): JavaMap<string, string>;
    getDisplayNames(arg0: ULocale): JavaMap<string, string>;
    getDisplayNames(arg0: ULocale, arg1: (param0: Object, param1: Object) => number): JavaMap<string, string>;
    getDisplayNames(arg0: ULocale, arg1: (param0: Object, param1: Object) => number, arg2: string): JavaMap<string, string>;
    getDisplayNames(arg0: ULocale, arg1: string): JavaMap<string, string>;
    getKey(arg0: ICUService$Key): Object;
    getKey(arg0: ICUService$Key, arg1: string[]): Object;
    getKey(arg0: ICUService$Key, arg1: string[], arg2: ICUService$Factory): Object;
    getName(): string;
    // private getVisibleIDMap(): JavaMap<string, ICUService$Factory>;
    getVisibleIDs(): string[];
    getVisibleIDs(arg0: string): string[];
    handleDefault(arg0: ICUService$Key, arg1: string[]): Object;
    isDefault(): boolean;
    markDefault(): void;
    notifyListener(arg0: EventListener): void;
    reInitializeFactories(): void;
    registerFactory(arg0: ICUService$Factory): ICUService$Factory;
    registerObject(arg0: Object, arg1: string): ICUService$Factory;
    registerObject(arg0: Object, arg1: string, arg2: boolean): ICUService$Factory;
    reset(): void;
    stats(): string;
    toString(): string;
    unregisterFactory(arg0: ICUService$Factory): boolean;
}