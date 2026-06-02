import type { PointerType } from '../../../../../com/sun/jna/PointerType.d.ts'
export class Udev$UdevDevice extends PointerType {
    constructor()
    getDevnode(): string;
    getDevtype(): string;
    getParent(): Udev$UdevDevice;
    getParentWithSubsystemDevtype(arg0: string, arg1: string): Udev$UdevDevice;
    getPropertyValue(arg0: string): string;
    getSubsystem(): string;
    getSysattrValue(arg0: string): string;
    getSysname(): string;
    getSyspath(): string;
    ref(): Udev$UdevDevice;
    unref(): void;
}