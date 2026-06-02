import type { PointerType } from '../../../../../com/sun/jna/PointerType.d.ts'
import type { Udev$UdevListEntry } from '../../../../../com/sun/jna/platform/linux/Udev$UdevListEntry.d.ts'
export class Udev$UdevEnumerate extends PointerType {
    constructor()
    addMatchSubsystem(arg0: string): number;
    getListEntry(): Udev$UdevListEntry;
    ref(): Udev$UdevEnumerate;
    scanDevices(): number;
    unref(): void;
}