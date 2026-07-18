import type { PluginBuilder } from '../../../../io/ktor/server/application/PluginBuilder.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class PluginInstance extends Object {
    constructor(builder: PluginBuilder<Object>)
    // private builder: PluginBuilder<Object>;
    /*not mapped: */ getBuilder$ktor_server_core(): PluginBuilder<Object>;
}