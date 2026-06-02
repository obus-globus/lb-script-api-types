import type { Binding } from '../../javax/naming/Binding.d.ts'
import type { Context } from '../../javax/naming/Context.d.ts'
import type { Name } from '../../javax/naming/Name.d.ts'
import type { NameClassPair } from '../../javax/naming/NameClassPair.d.ts'
import type { NameParser } from '../../javax/naming/NameParser.d.ts'
import type { NamingEnumeration } from '../../javax/naming/NamingEnumeration.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class InitialContext extends Object implements Context {
    static AUTHORITATIVE: string;
    static BATCHSIZE: string;
    static DNS_URL: string;
    static INITIAL_CONTEXT_FACTORY: string;
    static LANGUAGE: string;
    static OBJECT_FACTORIES: string;
    static PROVIDER_URL: string;
    static REFERRAL: string;
    static SECURITY_AUTHENTICATION: string;
    static SECURITY_CREDENTIALS: string;
    static SECURITY_PRINCIPAL: string;
    static SECURITY_PROTOCOL: string;
    static STATE_FACTORIES: string;
    static URL_PKG_PREFIXES: string;
    static doLookup(paramarg0: string): Object | null;
    static doLookup(paramarg0: Name): Object | null;
    constructor()
    constructor(arg0: Map<Object | null, Object | null>)
    constructor(arg0: boolean)
    // private defaultInitCtx: Context;
    // private gotDefault: boolean;
    // private myProps: Map<Object, Object>;
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
    getDefaultInitCtx(): Context;
    getEnvironment(): Map<Object | null, Object | null>;
    getNameInNamespace(): string;
    getNameParser(arg0: Name): NameParser;
    getNameParser(arg0: string): NameParser;
    getURLOrDefaultInitCtx(arg0: Name): Context;
    getURLOrDefaultInitCtx(arg0: string): Context;
    init(arg0: Map<Object | null, Object | null>): void;
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