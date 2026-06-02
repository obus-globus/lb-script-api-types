import type { Applet } from '../../java/applet/Applet.d.ts'
import type { AudioClip } from '../../java/applet/AudioClip.d.ts'
import type { Image } from '../../java/awt/Image.d.ts'
import type { InputStream } from '../../java/io/InputStream.d.ts'
import type { URL } from '../../java/net/URL.d.ts'
import type { Enumeration } from '../../java/util/Enumeration.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Iterator } from '../../java/util/Iterator.d.ts'
export interface AppletContext extends Object{
    getApplet(arg0: string): Applet;
    getApplets(): Enumeration<Applet>;
    getAudioClip(arg0: URL): AudioClip;
    getImage(arg0: URL): Image;
    getStream(arg0: string): InputStream;
    getStreamKeys(): Iterator<string>;
    setStream(arg0: string, arg1: InputStream): void;
    showDocument(arg0: URL): void;
    showDocument(arg0: URL, arg1: string): void;
    showStatus(arg0: string): void;
}