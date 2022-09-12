using { cuid } from '@sap/cds/common';
namespace userlog;

entity Users {
    key id       : Integer;
        name     : String(100);
        password : String(100);
}

entity Logs : cuid {
    message : String(100);
}