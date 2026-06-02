import type { QuitEvent } from '../../../java/awt/desktop/QuitEvent.d.ts'
import type { QuitResponse } from '../../../java/awt/desktop/QuitResponse.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface QuitHandler extends Object{
    handleQuitRequestWith(arg0: QuitEvent, arg1: QuitResponse): void;
}