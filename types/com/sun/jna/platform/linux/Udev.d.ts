import type { Library } from '../../../../../com/sun/jna/Library.d.ts'
import type { Udev$UdevContext } from '../../../../../com/sun/jna/platform/linux/Udev$UdevContext.d.ts'
import type { Udev$UdevDevice } from '../../../../../com/sun/jna/platform/linux/Udev$UdevDevice.d.ts'
import type { Udev$UdevEnumerate } from '../../../../../com/sun/jna/platform/linux/Udev$UdevEnumerate.d.ts'
import type { Udev$UdevListEntry } from '../../../../../com/sun/jna/platform/linux/Udev$UdevListEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface Udev extends Library, Object{
    udev_device_get_devnode(arg0: Udev$UdevDevice): string;
    udev_device_get_devtype(arg0: Udev$UdevDevice): string;
    udev_device_get_parent(arg0: Udev$UdevDevice): Udev$UdevDevice;
    udev_device_get_parent_with_subsystem_devtype(arg0: Udev$UdevDevice, arg1: string, arg2: string): Udev$UdevDevice;
    udev_device_get_property_value(arg0: Udev$UdevDevice, arg1: string): string;
    udev_device_get_subsystem(arg0: Udev$UdevDevice): string;
    udev_device_get_sysattr_value(arg0: Udev$UdevDevice, arg1: string): string;
    udev_device_get_sysname(arg0: Udev$UdevDevice): string;
    udev_device_get_syspath(arg0: Udev$UdevDevice): string;
    udev_device_new_from_syspath(arg0: Udev$UdevContext, arg1: string): Udev$UdevDevice;
    udev_device_ref(arg0: Udev$UdevDevice): Udev$UdevDevice;
    udev_device_unref(arg0: Udev$UdevDevice): Udev$UdevDevice;
    udev_enumerate_add_match_subsystem(arg0: Udev$UdevEnumerate, arg1: string): number;
    udev_enumerate_get_list_entry(arg0: Udev$UdevEnumerate): Udev$UdevListEntry;
    udev_enumerate_new(arg0: Udev$UdevContext): Udev$UdevEnumerate;
    udev_enumerate_ref(arg0: Udev$UdevEnumerate): Udev$UdevEnumerate;
    udev_enumerate_scan_devices(arg0: Udev$UdevEnumerate): number;
    udev_enumerate_unref(arg0: Udev$UdevEnumerate): Udev$UdevEnumerate;
    udev_list_entry_get_name(arg0: Udev$UdevListEntry): string;
    udev_list_entry_get_next(arg0: Udev$UdevListEntry): Udev$UdevListEntry;
    udev_new(): Udev$UdevContext;
    udev_ref(arg0: Udev$UdevContext): Udev$UdevContext;
    udev_unref(arg0: Udev$UdevContext): Udev$UdevContext;
}