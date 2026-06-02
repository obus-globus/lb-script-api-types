import type { Attribute } from '../../../../../javax/management/Attribute.d.ts'
import type { DynamicMBean } from '../../../../../javax/management/DynamicMBean.d.ts'
import type { MBeanInfo } from '../../../../../javax/management/MBeanInfo.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MinecraftServer } from '../../../../../net/minecraft/server/MinecraftServer.d.ts'
import type { MinecraftServerStatistics$AttributeDescription } from '../../../../../net/minecraft/util/monitoring/jmx/MinecraftServerStatistics$AttributeDescription.d.ts'
export class MinecraftServerStatistics extends Object implements DynamicMBean {
    static registerJmxMonitoring(paramserver: MinecraftServer): void;
    private constructor(server: MinecraftServer)
    // private attributeDescriptionByName: { [key: string]: MinecraftServerStatistics$AttributeDescription };
    // private mBeanInfo: MBeanInfo;
    // private server: MinecraftServer;
    getAttribute(attribute: string): Object;
    getAttributes(attributes: string[]): (Object | null)[];
    // private getAverageTickTime(): number;
    getMBeanInfo(): MBeanInfo;
    // private getTickTimes(): number[];
    invoke(actionName: string, params: Object[], signature: string[]): Object;
    setAttribute(attribute: Attribute): void;
    setAttributes(attributes: (Object | null)[]): (Object | null)[];
}