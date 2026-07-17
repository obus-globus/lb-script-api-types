import type { InvocationHandler } from '../../../java/lang/reflect/InvocationHandler.d.ts'
import type { Method } from '../../../java/lang/reflect/Method.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class Jdk8WithJettyBootPlatform$AlpnProvider extends Object implements InvocationHandler {
    constructor(protocols: string[])
    // private protocols: string[];
    selected: string | null;
    unsupported: boolean;
    invoke(proxy: Object, method: Method, args: Object[] | null): Object | null;
}