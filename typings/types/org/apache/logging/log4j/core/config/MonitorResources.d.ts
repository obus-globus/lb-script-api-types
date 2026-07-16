import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { MonitorResource } from '../../../../../../org/apache/logging/log4j/core/config/MonitorResource.d.ts'
export class MonitorResources extends Object {
    static createMonitorResources(paramresources: MonitorResource[]): MonitorResources;
    private constructor(resources: MonitorResource[])
    readonly resources: MonitorResource[];
    getResources(): MonitorResource[];
}