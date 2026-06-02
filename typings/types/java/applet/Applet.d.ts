import type { AppletContext } from '../../java/applet/AppletContext.d.ts'
import type { AppletStub } from '../../java/applet/AppletStub.d.ts'
import type { AudioClip } from '../../java/applet/AudioClip.d.ts'
import type { Dimension } from '../../java/awt/Dimension.d.ts'
import type { Image } from '../../java/awt/Image.d.ts'
import type { Panel } from '../../java/awt/Panel.d.ts'
import type { ObjectInputStream } from '../../java/io/ObjectInputStream.d.ts'
import type { URL } from '../../java/net/URL.d.ts'
import type { Locale } from '../../java/util/Locale.d.ts'
import type { AccessibleContext } from '../../javax/accessibility/AccessibleContext.d.ts'
export class Applet extends Panel {
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
    static newAudioClip(paramarg0: URL): AudioClip;
    constructor()
    accessibleContext: AccessibleContext;
    readonly stub: AppletStub;
    destroy(): void;
    getAccessibleContext(): AccessibleContext;
    getAppletContext(): AppletContext;
    getAppletInfo(): string;
    getAudioClip(arg0: URL): AudioClip;
    getAudioClip(arg0: URL, arg1: string): AudioClip;
    getCodeBase(): URL;
    getDocumentBase(): URL;
    getImage(arg0: URL): Image;
    getImage(arg0: URL, arg1: string): Image;
    getLocale(): Locale;
    getParameter(arg0: string): string;
    getParameterInfo(): string[][];
    init(): void;
    isActive(): boolean;
    isValidateRoot(): boolean;
    play(arg0: URL): void;
    play(arg0: URL, arg1: string): void;
    // private readObject(arg0: ObjectInputStream): void;
    resize(arg0: Dimension): void;
    resize(arg0: number, arg1: number): void;
    setStub(arg0: AppletStub): void;
    showStatus(arg0: string): void;
    start(): void;
    stop(): void;
}