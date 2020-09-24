/*
* Defining API
* File containing all API call that can be shared across project.
*
*/

import { Network } from './NetworkRequest'

export default class Apis {
  static fetch_image = () => {
    return Network('GET', 'list')
  }

}