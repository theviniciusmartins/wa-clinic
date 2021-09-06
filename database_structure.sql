CREATE TABLE IF NOT EXISTS public.laboratory
(
    id serial,
    name character varying,
    location character varying,
    active boolean,
    PRIMARY KEY (id)
);

ALTER TABLE public.laboratory
    OWNER to postgres;


CREATE TABLE IF NOT EXISTS public.exam_type
(
    id serial,
    name character varying,
    PRIMARY KEY (id)
);

ALTER TABLE public.exam_type
    OWNER to postgres;

CREATE TABLE IF NOT EXISTS public.exam
(
    id serial,
    name character varying,
    active boolean,
    exam_type integer NOT NULL,
    PRIMARY KEY (id),
    CONSTRAINT exam_type_exam FOREIGN KEY (exam_type)
        REFERENCES public.exam_type (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
);

ALTER TABLE public.exam
    OWNER to postgres;
    

CREATE TABLE IF NOT EXISTS public.exam_laboratory
(
    id serial,
    laboratory integer NOT NULL,
    exam integer NOT NULL,
    PRIMARY KEY (id, laboratory, exam)
        INCLUDE(laboratory),
    CONSTRAINT exam_laboratory_laboratory FOREIGN KEY (laboratory)
        REFERENCES public.laboratory (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID,
    CONSTRAINT exame_laboratory_exam FOREIGN KEY (id)
        REFERENCES public.exam (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
);

ALTER TABLE public.exam_laboratory
    OWNER to postgres;


INSERT INTO exam_type (name) values ('analise clinica');
INSERT INTO exam_type (name) values ('imagem');