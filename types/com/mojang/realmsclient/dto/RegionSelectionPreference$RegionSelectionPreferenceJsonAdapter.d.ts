import type { TypeAdapter } from '../../../../com/google/gson/TypeAdapter.d.ts'
import type { JsonReader } from '../../../../com/google/gson/stream/JsonReader.d.ts'
import type { JsonWriter } from '../../../../com/google/gson/stream/JsonWriter.d.ts'
import type { RegionSelectionPreference } from '../../../../com/mojang/realmsclient/dto/RegionSelectionPreference.d.ts'
export class RegionSelectionPreference$RegionSelectionPreferenceJsonAdapter extends TypeAdapter<RegionSelectionPreference> {
    constructor()
    read(jsonReader: JsonReader): RegionSelectionPreference;
    write(jsonWriter: JsonWriter, regionSelectionPreference: RegionSelectionPreference): void;
}