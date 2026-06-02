import type { PointerType } from '../../../../../com/sun/jna/PointerType.d.ts'
import type { Udev$UdevDevice } from '../../../../../com/sun/jna/platform/linux/Udev$UdevDevice.d.ts'
import type { Udev$UdevEnumerate } from '../../../../../com/sun/jna/platform/linux/Udev$UdevEnumerate.d.ts'
export class Udev$UdevContext extends PointerType {
    constructor()
    deviceNewFromSyspath(arg0: string): Udev$UdevDevice;
    enumerateNew(): Udev$UdevEnumerate;
    ref(): Udev$UdevContext;
    unref(): void;
}