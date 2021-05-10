
INSERT INTO departments (name)
VALUES 
    ("Assembly"),
    ("Service"),
    ("Engineering"),
    ("Production");

INSERT INTO roles (title, salary, department_id)
VALUES
    ("Assembly line worker", 45000, 1),
    ("Electrical technican", 60000, 2),
    ("Mechanical engineer", 70000, 3),
    ("Software engineer", 60000, 3),
    ("Service Manager", 90000, 2),
    ("Engineering Manager", 90000, 3),
    ("Production Manager", 100000, 4),
    ("Ceo", 150000, NULL);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
    ("Paul", "Bingham", 1, NULL),
    ("Austin", "Dudzic", 2, NULL),
    ("Saahil", "Gupta", 5, 2),
    ("Mark", "Brooks", 2, NULL),
    ("Art", "Maldanado", 1, 5),
    ("Bob", "Gregory", 3, NULL),
    ("Mike", "Lewis", 8, 2),
    ("Noel", "Archie",7, 6),
    ("Andrew", "sysmac", 4, NULL);
    