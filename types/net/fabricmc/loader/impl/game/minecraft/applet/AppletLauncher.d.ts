import type { Applet } from '../../../../../../../java/applet/Applet.d.ts'
import type { AppletStub } from '../../../../../../../java/applet/AppletStub.d.ts'
import type { AudioClip } from '../../../../../../../java/applet/AudioClip.d.ts'
import type { Dimension } from '../../../../../../../java/awt/Dimension.d.ts'
import type { File } from '../../../../../../../java/io/File.d.ts'
import type { URL } from '../../../../../../../java/net/URL.d.ts'
export class AppletLauncher extends Applet implements AppletStub {
    static ABORT: number;
    static ALLBITS: number;
    static BOTTOM_ALIGNMENT: number;
    static CENTER_ALIGNMENT: number;
    static ERROR: number;
    static FRAMEBITS: number;
    static HEIGHT: number;
    static LEFT_ALIGNMENT: number;
    static PROPERTIES: number;
    static RIGHT_ALIGNMENT: number;
    static SOMEBITS: number;
    static TOP_ALIGNMENT: number;
    static WIDTH: number;
    static gameDir: File;
    static newAudioClip(paramarg0: URL): AudioClip;
    constructor(arg0: File, arg1: string, arg2: string, arg3: string, arg4: string, arg5: boolean, arg6: boolean, arg7: boolean)
    readonly active: boolean;
    // private mcApplet: Applet;
    readonly params: { [key: string]: string };
    appletResize(arg0: number, arg1: number): void;
    getCodeBase(): URL;
    getDocumentBase(): URL;
    // private getMinecraftHostingUrl(): URL;
    getParameter(arg0: string): string;
    getParams(): { [key: string]: string };
    init(): void;
    isActive(): boolean;
    replace(arg0: Applet): void;
    resize(arg0: Dimension): void;
    resize(arg0: number, arg1: number): void;
    setVisible(arg0: boolean): void;
    start(): void;
    stop(): void;
}