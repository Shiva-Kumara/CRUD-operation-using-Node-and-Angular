Change the database configuration according to your credentials.

STEP-1 Run the following script in your database query tool.

CREATE TABLE public.employee
(
    id integer NOT NULL DEFAULT nextval('employee_id_seq'::regclass),
    name character varying(50) COLLATE pg_catalog."default",
    designation character varying(50) COLLATE pg_catalog."default",
    office character varying(50) COLLATE pg_catalog."default",
    salary integer,
    "createdAt" date,
    "updatedAt" date,
    CONSTRAINT employee_pkey PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.employee
    OWNER to postgres;

STEP-2
Start the node server using the following command in the terminal

node index

and 
run the following url in the browser.
http://localhost:3000/

STEP-3
Start the angular server using the following command in the terminal

ng serve

and

run the following url in the browser.

http://localhost:4200/