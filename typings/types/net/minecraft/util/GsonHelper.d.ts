import type { Gson } from '../../../com/google/gson/Gson.d.ts'
import type { JsonDeserializationContext } from '../../../com/google/gson/JsonDeserializationContext.d.ts'
import type { JsonElement } from '../../../com/google/gson/JsonElement.d.ts'
import type { JsonObject } from '../../../com/google/gson/JsonObject.d.ts'
import type { TypeToken } from '../../../com/google/gson/reflect/TypeToken.d.ts'
import type { JsonWriter } from '../../../com/google/gson/stream/JsonWriter.d.ts'
import type { Reader } from '../../../java/io/Reader.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { BigDecimal } from '../../../java/math/BigDecimal.d.ts'
import type { BigInteger } from '../../../java/math/BigInteger.d.ts'
import type { Comparator } from '../../../java/util/Comparator.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Holder } from '../../../net/minecraft/core/Holder.d.ts'
import type { Item } from '../../../net/minecraft/world/item/Item.d.ts'
export class GsonHelper extends Object {
    static convertToBigDecimal(paramelement: JsonElement, paramname: string): BigDecimal;
    static convertToBigInteger(paramelement: JsonElement, paramname: string): BigInteger;
    static convertToBoolean(paramelement: JsonElement, paramname: string): boolean;
    static convertToByte(paramelement: JsonElement, paramname: string): number;
    static convertToCharacter(paramelement: JsonElement, paramname: string): string;
    static convertToDouble(paramelement: JsonElement, paramname: string): number;
    static convertToFloat(paramelement: JsonElement, paramname: string): number;
    static convertToInt(paramelement: JsonElement, paramname: string): number;
    static convertToItem(paramelement: JsonElement, paramname: string): Holder<Item>;
    static convertToJsonArray(paramelement: JsonElement, paramname: string): JsonElement[];
    static convertToJsonObject(paramelement: JsonElement, paramname: string): JsonObject;
    static convertToLong(paramelement: JsonElement, paramname: string): number;
    static convertToObject(paramelement: JsonElement, paramname: string, paramcontext: JsonDeserializationContext, paramclazz: Class<Object>): Object | null;
    static convertToShort(paramelement: JsonElement, paramname: string): number;
    static convertToString(paramelement: JsonElement, paramname: string): string;
    static encodesLongerThan(paramelement: JsonElement, paramlimit: number): boolean;
    static fromJson(paramgson: Gson, paramreader: Reader, paramtype: TypeToken<Object>): Object | null;
    static fromJson(paramgson: Gson, paramreader: Reader, paramtype: Class<Object>): Object | null;
    static fromJson(paramgson: Gson, paramstring: string, paramtype: Class<Object>): Object | null;
    static fromNullableJson(paramgson: Gson, paramreader: Reader, paramtype: TypeToken<Object>): Object | null;
    static fromNullableJson(paramgson: Gson, paramstring: string, paramtype: TypeToken<Object>): Object | null;
    static getAsBigDecimal(paramobject: JsonObject, paramname: string): BigDecimal;
    static getAsBigDecimal(paramobject: JsonObject, paramname: string, paramdef: BigDecimal): BigDecimal;
    static getAsBigInteger(paramobject: JsonObject, paramname: string): BigInteger;
    static getAsBigInteger(paramobject: JsonObject, paramname: string, paramdef: BigInteger): BigInteger;
    static getAsBoolean(paramobject: JsonObject, paramname: string): boolean;
    static getAsBoolean(paramobject: JsonObject, paramname: string, paramdef: boolean): boolean;
    static getAsByte(paramobject: JsonObject, paramname: string): number;
    static getAsByte(paramobject: JsonObject, paramname: string, paramdef: number): number;
    static getAsCharacter(paramobject: JsonObject, paramname: string): string;
    static getAsCharacter(paramobject: JsonObject, paramname: string, paramdef: string): string;
    static getAsDouble(paramobject: JsonObject, paramname: string): number;
    static getAsDouble(paramobject: JsonObject, paramname: string, paramdef: number): number;
    static getAsFloat(paramobject: JsonObject, paramname: string): number;
    static getAsFloat(paramobject: JsonObject, paramname: string, paramdef: number): number;
    static getAsInt(paramobject: JsonObject, paramname: string): number;
    static getAsInt(paramobject: JsonObject, paramname: string, paramdef: number): number;
    static getAsItem(paramobject: JsonObject, paramname: string): Holder<Item>;
    static getAsItem(paramobject: JsonObject, paramname: string, paramdef: Holder<Item>): Holder<Item>;
    static getAsJsonArray(paramobject: JsonObject, paramname: string): JsonElement[];
    static getAsJsonArray(paramobject: JsonObject, paramname: string, paramdef: JsonElement[]): JsonElement[];
    static getAsJsonObject(paramobject: JsonObject, paramname: string): JsonObject;
    static getAsJsonObject(paramobject: JsonObject, paramname: string, paramdef: JsonObject): JsonObject;
    static getAsLong(paramobject: JsonObject, paramname: string): number;
    static getAsLong(paramobject: JsonObject, paramname: string, paramdef: number): number;
    static getAsObject(paramobject: JsonObject, paramname: string, paramdef: Object | null, paramcontext: JsonDeserializationContext, paramclazz: Class<Object>): Object | null;
    static getAsObject(paramobject: JsonObject, paramname: string, paramcontext: JsonDeserializationContext, paramclazz: Class<Object>): Object | null;
    static getAsShort(paramobject: JsonObject, paramname: string): number;
    static getAsShort(paramobject: JsonObject, paramname: string, paramdef: number): number;
    static getAsString(paramobject: JsonObject, paramname: string): string;
    static getAsString(paramobject: JsonObject, paramname: string, paramdef: string): string;
    static getNonNull(paramobject: JsonObject, paramname: string): JsonElement;
    static getType(paramelement: JsonElement): string;
    static isArrayNode(paramnode: JsonObject, paramname: string): boolean;
    static isBooleanValue(paramnode: JsonElement): boolean;
    static isBooleanValue(paramnode: JsonObject, paramname: string): boolean;
    static isNumberValue(paramnode: JsonElement): boolean;
    static isNumberValue(paramnode: JsonObject, paramname: string): boolean;
    static isObjectNode(paramnode: JsonObject, paramname: string): boolean;
    static isStringValue(paramnode: JsonElement): boolean;
    static isStringValue(paramnode: JsonObject, paramname: string): boolean;
    static isValidNode(paramnode: JsonObject, paramname: string): boolean;
    static isValidPrimitive(paramnode: JsonObject, paramname: string): boolean;
    static parse(paramreader: Reader): JsonObject;
    static parse(paramstring: string): JsonObject;
    static parseArray(paramreader: Reader): JsonElement[];
    static parseArray(paramstring: string): JsonElement[];
    static toStableString(paramjsonElement: JsonElement): string;
    static writeValue(paramout: JsonWriter, paramvalue: JsonElement, paramkeyComparator: (param0: string, param1: string) => number): void;
    constructor()
}