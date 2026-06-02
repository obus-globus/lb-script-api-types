import type { AppletContext } from '../../java/applet/AppletContext.d.ts'
import type { URL } from '../../java/net/URL.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface AppletStub extends Object{
    appletResize(arg0: number, arg1: number): void;
    getAppletContext(): AppletContext;
    getCodeBase(): URL;
    getDocumentBase(): URL;
    getParameter(arg0: string): string;
    isActive(): boolean;
}