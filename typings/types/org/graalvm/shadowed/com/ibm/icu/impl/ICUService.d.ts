import type { Comparator } from '../../../../../../../java/util/Comparator.d.ts'
import type { EventListener } from '../../../../../../../java/util/EventListener.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ICUNotifier } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/ICUNotifier.d.ts'
import type { ICURWLock } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/ICURWLock.d.ts'
import type { ICUService$CacheEntry } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/ICUService$CacheEntry.d.ts'
import type { ICUService$Factory } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/ICUService$Factory.d.ts'
import type { ICUService$Key } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/ICUService$Key.d.ts'
import type { ICUService$LocaleRef } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/ICUService$LocaleRef.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export class ICUService extends ICUNotifier {
    constructor()
    constructor(name: string)
    // private cache: { [key: string]: ICUService$CacheEntry };
    // private defaultSize: number;
    // private dnref: ICUService$LocaleRef;
    // private factories: ICUService$Factory[];
    // private factoryLock: ICURWLock;
    // private idcache: { [key: string]: ICUService$Factory };
    readonly name: string;
    acceptsListener(l: EventListener): boolean;
    clearCaches(): void;
    clearServiceCache(): void;
    createKey(id: string): ICUService$Key;
    factories(): ICUService$Factory[];
    get(descriptor: string): Object;
    get(descriptor: string, actualReturn: string[]): Object;
    getDisplayName(id: string): string;
    getDisplayName(id: string, locale: ULocale): string;
    getDisplayNames(): { [key: string]: string };
    getDisplayNames(locale: ULocale): { [key: string]: string };
    getDisplayNames(locale: ULocale, com: (param0: Object) => kotlin.Boolean): { [key: string]: string };
    getDisplayNames(locale: ULocale, com: (param0: Object) => kotlin.Boolean, matchID: string): { [key: string]: string };
    getDisplayNames(locale: ULocale, matchID: string): { [key: string]: string };
    getKey(key: ICUService$Key): Object;
    getKey(key: ICUService$Key, actualReturn: string[]): Object;
    getKey(key: ICUService$Key, actualReturn: string[], factory: ICUService$Factory): Object;
    getName(): string;
    // private getVisibleIDMap(): { [key: string]: ICUService$Factory };
    getVisibleIDs(): string[];
    getVisibleIDs(matchID: string): string[];
    handleDefault(key: ICUService$Key, actualIDReturn: string[]): Object;
    isDefault(): boolean;
    markDefault(): void;
    notifyListener(l: EventListener): void;
    reInitializeFactories(): void;
    registerFactory(factory: ICUService$Factory): ICUService$Factory;
    registerObject(obj: Object, id: string): ICUService$Factory;
    registerObject(obj: Object, id: string, visible: boolean): ICUService$Factory;
    reset(): void;
    stats(): string;
    toString(): string;
    unregisterFactory(factory: ICUService$Factory): boolean;
}