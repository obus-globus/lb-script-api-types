import type { MBeanServer } from '../../../../../../javax/management/MBeanServer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class Server extends Object {
    static DOMAIN: string;
    static escape(paramname: string): string;
    static reregisterMBeansAfterReconfigure(): void;
    static reregisterMBeansAfterReconfigure(parammbs: MBeanServer): void;
    static unregisterLoggerContext(paramloggerContextName: string): void;
    static unregisterLoggerContext(paramcontextName: string, parammbs: MBeanServer): void;
    static unregisterMBeans(): void;
    static unregisterMBeans(parammbs: MBeanServer): void;
    private constructor()
}