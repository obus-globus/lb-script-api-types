import type { GraphicsConfiguration } from '../../java/awt/GraphicsConfiguration.d.ts'
import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export abstract class GraphicsConfigTemplate extends Object implements Serializable {
    static PREFERRED: number;
    static REQUIRED: number;
    static UNNECESSARY: number;
    constructor()
    getBestConfiguration(arg0: GraphicsConfiguration[]): GraphicsConfiguration;
    isGraphicsConfigSupported(arg0: GraphicsConfiguration): boolean;
}