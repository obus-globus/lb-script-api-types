import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ALPN$Provider } from '../../../../org/eclipse/jetty/alpn/ALPN$Provider.d.ts'
export interface ALPN$ClientProvider extends Object, ALPN$Provider{
    protocols(): string[];
    selected(arg0: string): void;
    unsupported(): void;
}