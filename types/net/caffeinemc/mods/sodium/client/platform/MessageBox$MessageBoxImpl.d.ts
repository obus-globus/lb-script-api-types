import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { MessageBox$IconType } from '../../../../../../net/caffeinemc/mods/sodium/client/platform/MessageBox$IconType.d.ts'
import type { NativeWindowHandle } from '../../../../../../net/caffeinemc/mods/sodium/client/platform/NativeWindowHandle.d.ts'
export interface MessageBox$MessageBoxImpl extends Object{
    showMessageBox(arg0: NativeWindowHandle, arg1: MessageBox$IconType, arg2: string, arg3: string, arg4: string): void;
}