import type { AboutEvent } from '../../../java/awt/desktop/AboutEvent.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface AboutHandler extends Object{
    handleAbout(arg0: AboutEvent): void;
}