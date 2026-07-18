import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ALPN$Provider } from '../../../../org/eclipse/jetty/alpn/ALPN$Provider.d.ts'
export interface ALPN$ServerProvider extends Object, ALPN$Provider{
    select(arg0: string[]): string;
    unsupported(): void;
}