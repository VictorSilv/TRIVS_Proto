/**
 * Global configuration for sheets, columns, enums and system behavior.
 * This file MUST NOT depend on other modules.
 */

const CONFIG = Object.freeze({

  SPREADSHEET_ID: SpreadsheetApp.getActive().getId(),

  SHEET_NAMES: {
    DRIVERS: 'Drivers',
    VEHICLES: 'Vehicles',
    DEPOTS: 'Depots',
    CLIENTS: 'Clients',
    ORDERS: 'Orders',
    ROUTES: 'Routes',
    ROUTE_STOPS: 'RouteStops',
    DEPOT_INVENTORY: 'DepotInventory',
    VEHICLE_INVENTORY: 'VehicleInventory',
    VEHICLE_POSITION_LOG: 'VehiclePositionLog',
    DRIVER_STATUS_LOG: 'DriverStatusLog',
    ORDER_HISTORY: 'OrderHistory',
    ERROR_LOG: '_ErrorLog'
  },

  DRIVERS_COLUMNS: {
    DRIVER_ID: 0,
    NAME: 1,
    PHONE: 2,
    STATUS: 3,
    WORK_START: 4,
    WORK_END: 5,
    CURRENT_VEHICLE_ID: 6,
    LAST_LAT: 7,
    LAST_LNG: 8,
    LAST_UPDATE: 9,
    ACTIVE: 10
  },

  ORDERS_COLUMNS: {
    ORDER_ID: 0,
    CLIENT_ID: 1,
    STATUS: 2,
    ADDRESS: 3,
    LAT: 4,
    LNG: 5,
    CREATED_AT: 6,
    DELIVERED_AT: 7,
    ROUTE_ID: 8,
    TOTAL_WEIGHT: 9
  },

  ENUMS: {
    DRIVER_STATUS: ['waiting_route', 'delivering', 'returning', 'resting', 'other'],
    ORDER_STATUS: ['pending', 'assigned', 'delivering', 'delivered', 'cancelled'],
    ROUTE_STATUS: ['planned', 'in_progress', 'completed']
  },

  SECURITY: {
    MAX_STRING_LENGTH: 255
  }
});
