CREATE DATABASE behaviour;


CREATE TABLE behaviourList (id serial PRIMARY KEY,
                                              name VARCHAR(500));


CREATE TABLE todoMakeDecisions (id serial PRIMARY KEY,
                                                  about VARCHAR(500));


CREATE TABLE todoThinkLaterally (id serial PRIMARY KEY,
                                                   about VARCHAR(500));


CREATE TABLE todoInfluenceNegotiate (id serial PRIMARY KEY,
                                                       about VARCHAR(500));


CREATE TABLE todoManageConflict (id serial PRIMARY KEY,
                                                   about VARCHAR(500));


CREATE TABLE todoDriveResults (id serial PRIMARY KEY,
                                                 about VARCHAR(500));