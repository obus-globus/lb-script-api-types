import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ApplicationInfo } from '../../../../oshi/software/os/ApplicationInfo.d.ts'
export class WindowsInstalledApps extends Object {
    static queryInstalledApps(): ApplicationInfo[];
    private constructor()
}