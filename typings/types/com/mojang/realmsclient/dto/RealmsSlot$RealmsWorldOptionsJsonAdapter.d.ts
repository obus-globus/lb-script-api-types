import type { TypeAdapter } from '../../../../com/google/gson/TypeAdapter.d.ts'
import type { JsonReader } from '../../../../com/google/gson/stream/JsonReader.d.ts'
import type { JsonWriter } from '../../../../com/google/gson/stream/JsonWriter.d.ts'
import type { RealmsWorldOptions } from '../../../../com/mojang/realmsclient/dto/RealmsWorldOptions.d.ts'
export class RealmsSlot$RealmsWorldOptionsJsonAdapter extends TypeAdapter<RealmsWorldOptions> {
    private constructor()
    read(jsonReader: JsonReader): RealmsWorldOptions;
    write(jsonWriter: JsonWriter, realmsSlotOptions: RealmsWorldOptions): void;
}