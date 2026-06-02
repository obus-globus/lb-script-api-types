import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Calendar } from '../../../../java/util/Calendar.d.ts'
import type { Date } from '../../../../java/util/Date.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../java/util/Map$Entry.d.ts'
import type { ClimateForcast } from '../../../../org/apache/tika/metadata/ClimateForcast.d.ts'
import type { CreativeCommons } from '../../../../org/apache/tika/metadata/CreativeCommons.d.ts'
import type { Geographic } from '../../../../org/apache/tika/metadata/Geographic.d.ts'
import type { HttpHeaders } from '../../../../org/apache/tika/metadata/HttpHeaders.d.ts'
import type { Message } from '../../../../org/apache/tika/metadata/Message.d.ts'
import type { Property } from '../../../../org/apache/tika/metadata/Property.d.ts'
import type { TIFF } from '../../../../org/apache/tika/metadata/TIFF.d.ts'
import type { TikaMimeKeys } from '../../../../org/apache/tika/metadata/TikaMimeKeys.d.ts'
import type { MetadataWriteFilter } from '../../../../org/apache/tika/metadata/writefilter/MetadataWriteFilter.d.ts'
export class Metadata extends Object implements Serializable, ClimateForcast, CreativeCommons, Geographic, HttpHeaders, Message, TIFF, TikaMimeKeys {
    static ACKNOWLEDGEMENT: string;
    static ALTITUDE: Property;
    static BITS_PER_SAMPLE: Property;
    static COMMAND_LINE: string;
    static COMMENT: string;
    static CONTACT: string;
    static CONTENT_DISPOSITION: string;
    static CONTENT_ENCODING: string;
    static CONTENT_LANGUAGE: string;
    static CONTENT_LENGTH: string;
    static CONTENT_LOCATION: string;
    static CONTENT_MD5: string;
    static CONTENT_TYPE: string;
    static CONVENTIONS: string;
    static EQUIPMENT_MAKE: Property;
    static EQUIPMENT_MODEL: Property;
    static EXIF_PAGE_COUNT: Property;
    static EXPERIMENT_ID: string;
    static EXPOSURE_TIME: Property;
    static FLASH_FIRED: Property;
    static FOCAL_LENGTH: Property;
    static F_NUMBER: Property;
    static HISTORY: string;
    static IMAGE_LENGTH: Property;
    static IMAGE_WIDTH: Property;
    static INSTITUTION: string;
    static ISO_SPEED_RATINGS: Property;
    static LATITUDE: Property;
    static LICENSE_LOCATION: string;
    static LICENSE_URL: string;
    static LOCATION: string;
    static LONGITUDE: Property;
    static MESSAGE_BCC: string;
    static MESSAGE_BCC_DISPLAY_NAME: Property;
    static MESSAGE_BCC_EMAIL: Property;
    static MESSAGE_BCC_NAME: Property;
    static MESSAGE_CC: string;
    static MESSAGE_CC_DISPLAY_NAME: Property;
    static MESSAGE_CC_EMAIL: Property;
    static MESSAGE_CC_NAME: Property;
    static MESSAGE_FROM: string;
    static MESSAGE_FROM_EMAIL: Property;
    static MESSAGE_FROM_NAME: Property;
    static MESSAGE_PREFIX: string;
    static MESSAGE_RAW_HEADER_PREFIX: string;
    static MESSAGE_RECIPIENT_ADDRESS: string;
    static MESSAGE_TO: string;
    static MESSAGE_TO_DISPLAY_NAME: Property;
    static MESSAGE_TO_EMAIL: Property;
    static MESSAGE_TO_NAME: Property;
    static MIME_TYPE_MAGIC: string;
    static MODEL_NAME_ENGLISH: string;
    static MULTIPART_BOUNDARY: string;
    static MULTIPART_SUBTYPE: string;
    static ORIENTATION: Property;
    static ORIGINAL_DATE: Property;
    static PROGRAM_ID: string;
    static PROJECT_ID: string;
    static REALIZATION: string;
    static REFERENCES: string;
    static RESOLUTION_HORIZONTAL: Property;
    static RESOLUTION_UNIT: Property;
    static RESOLUTION_VERTICAL: Property;
    static SAMPLES_PER_PIXEL: Property;
    static SOFTWARE: Property;
    static SOURCE: string;
    static TABLE_ID: string;
    static TIKA_MIME_FILE: string;
    static TIMESTAMP: Property;
    static WORK_TYPE: string;
    constructor()
    // private metadata: { [key: string]: string[] };
    // private writeFilter: MetadataWriteFilter;
    // private _getValues(arg0: string): string[];
    add(arg0: string, arg1: string[]): void;
    add(arg0: string, arg1: string): void;
    add(arg0: Property, arg1: Calendar): void;
    add(arg0: Property, arg1: number): void;
    add(arg0: Property, arg1: string): void;
    equals(arg0: Object | null): boolean;
    get(arg0: string): string;
    get(arg0: Property): string;
    getDate(arg0: Property): Date;
    getInt(arg0: Property): number;
    getIntValues(arg0: Property): number[];
    getLongValues(arg0: Property): number[];
    // private getMetadataEntryHashCode(arg0: Map$Entry<string, string[]>): number;
    getValues(arg0: string): string[];
    getValues(arg0: Property): string[];
    hashCode(): number;
    isMultiValued(arg0: string): boolean;
    isMultiValued(arg0: Property): boolean;
    names(): string[];
    remove(arg0: string): void;
    set(arg0: string, arg1: string[]): void;
    set(arg0: string, arg1: string): void;
    set(arg0: Property, arg1: Calendar): void;
    set(arg0: Property, arg1: Date): void;
    set(arg0: Property, arg1: string[]): void;
    set(arg0: Property, arg1: boolean): void;
    set(arg0: Property, arg1: number): void;
    set(arg0: Property, arg1: number): void;
    set(arg0: Property, arg1: number): void;
    set(arg0: Property, arg1: string): void;
    setAll(arg0: Properties): void;
    setMetadataWriteFilter(arg0: MetadataWriteFilter): void;
    size(): number;
    toString(): string;
}