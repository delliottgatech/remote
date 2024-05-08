import { Cartesian3, Color } from 'cesium';

/**
 * A data class detailing the information of a Point to be drawn in a Cesium Globe.
 * @param {string} name The name of the Space Vehicle
 * @param {Date} epoch  The timestamp of the space vehicle data
 * @param {number[]} positionLLA The latitude, longitude, and altitude in an array
 * @param {Color} color The color of the point to be drawn
 */
class PointInfo {
  name: string;
  epoch: Date;
  positionLLA: { latitude: number; longitude: number; altitude: number };
  component: string;
  color: Color;
  description: string;
  constructor(
    name: string,
    epoch: Date,
    positionLLA: number[],
    component: string,
    color: Color,
    description?: string,
  ) {
    this.name = name;
    this.epoch = epoch;
    this.positionLLA = {
      latitude: positionLLA[0],
      longitude: positionLLA[1],
      altitude: positionLLA[2],
    };
    this.component = component;
    this.color = color;
    this.description = description ?? '';
  }

  /**
   * Concatenates the object's properties into a human-readable string.
   * All distance measurements are displayed in km
   * @returns The object's contents.
   */
  toString(): string {
    const str = [];
    str.push(`<p><strong>Source: </strong>${this.component}</p>`);
    const editEpoch = new Date(
      this.epoch.getUTCFullYear(),
      this.epoch.getUTCMonth(),
      this.epoch.getUTCDate(),
      this.epoch.getUTCHours(),
      this.epoch.getUTCMinutes(),
      this.epoch.getUTCSeconds(),
    );
    str.push(
      `<p><strong>Epoch:</strong> ${editEpoch.toLocaleString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit',
      })} UTC </p>`,
    );
    if (typeof this.positionLLA !== 'undefined') {
      str.push(`<hr><h3>Position LLA</h3>`);
      for (const [key, value] of Object.entries(this.positionLLA)) {
        if (key !== 'altitude')
          str.push(
            `<p><strong>${camelCaseToTitle(key)}: </strong>${value} °</p>`,
          );
        else
          str.push(
            `<p><strong>${camelCaseToTitle(key)}: </strong>${value / 1000} km</p>`,
          );
      }
    }
    str.push([this.description]);
    return str.join('');
  }

  /**
   * Get the position in a way for Cesium to utilize
   * @returns Cartesian3 position
   */
  getCartesian3Position(): Cartesian3 {
    return Cartesian3.fromDegrees(
      this.positionLLA.longitude,
      this.positionLLA.latitude,
      this.positionLLA.altitude,
    );
  }
}

/**
 * Convert a variable from camelCase to TitleCase
 * @param word The variable name in camelCase
 * @returns The variable name in titleCase
 */
function camelCaseToTitle(word: string): string {
  return `${word[0].toUpperCase()}${word.slice(1)}`;
}

export default PointInfo;
