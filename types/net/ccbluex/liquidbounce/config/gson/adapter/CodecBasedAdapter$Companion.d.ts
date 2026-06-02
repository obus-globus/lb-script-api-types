import type { JsonSerializer } from '../../../../../../com/google/gson/JsonSerializer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { CodecBasedAdapter } from '../../../../../../net/ccbluex/liquidbounce/config/gson/adapter/CodecBasedAdapter.d.ts'
import type { DataComponentPatch } from '../../../../../../net/minecraft/core/component/DataComponentPatch.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
export class CodecBasedAdapter$Companion extends Object {
    COMPONENT: CodecBasedAdapter<Component>;
    DATA_COMPONENT_PATCH: CodecBasedAdapter<DataComponentPatch>;
    TRANSLATED_COMPONENT: JsonSerializer<Component>;
}