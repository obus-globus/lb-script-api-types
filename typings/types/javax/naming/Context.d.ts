import type { JavaMap } from '../../JavaMap.d.ts'
import type { Binding } from '../../javax/naming/Binding.d.ts'
import type { Name } from '../../javax/naming/Name.d.ts'
import type { NameClassPair } from '../../javax/naming/NameClassPair.d.ts'
import type { NameParser } from '../../javax/naming/NameParser.d.ts'
import type { NamingEnumeration } from '../../javax/naming/NamingEnumeration.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface Context extends Object{
    addToEnvironment(arg0: string, arg1: Object): Object;
    bind(arg0: Name, arg1: Object): void;
    bind(arg0: string, arg1: Object): void;
    close(): void;
    composeName(arg0: Name, arg1: Name): Name;
    composeName(arg0: string, arg1: string): string;
    createSubcontext(arg0: Name): Context;
    createSubcontext(arg0: string): Context;
    destroySubcontext(arg0: Name): void;
    destroySubcontext(arg0: string): void;
    getEnvironment(): JavaMap<Object | null, Object | null>;
    getNameInNamespace(): string;
    getNameParser(arg0: Name): NameParser;
    getNameParser(arg0: string): NameParser;
    list(arg0: Name): NamingEnumeration<NameClassPair>;
    list(arg0: string): NamingEnumeration<NameClassPair>;
    listBindings(arg0: Name): NamingEnumeration<Binding>;
    listBindings(arg0: string): NamingEnumeration<Binding>;
    lookup(arg0: Name): Object;
    lookup(arg0: string): Object;
    lookupLink(arg0: Name): Object;
    lookupLink(arg0: string): Object;
    rebind(arg0: Name, arg1: Object): void;
    rebind(arg0: string, arg1: Object): void;
    removeFromEnvironment(arg0: string): Object;
    rename(arg0: Name, arg1: Name): void;
    rename(arg0: string, arg1: string): void;
    unbind(arg0: Name): void;
    unbind(arg0: string): void;
}