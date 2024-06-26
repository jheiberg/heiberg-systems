"""empty message

Revision ID: 514ee06c581e
Revises: 4f257356c65b
Create Date: 2024-05-24 16:06:16.293253

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql

# revision identifiers, used by Alembic.
revision = '514ee06c581e'
down_revision = '4f257356c65b'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('fuel_log', schema=None) as batch_op:
        batch_op.alter_column('timestamp',
               existing_type=postgresql.TIMESTAMP(),
               type_=sa.DateTime(timezone=True),
               existing_nullable=False)

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('fuel_log', schema=None) as batch_op:
        batch_op.alter_column('timestamp',
               existing_type=sa.DateTime(timezone=True),
               type_=postgresql.TIMESTAMP(),
               existing_nullable=False)

    # ### end Alembic commands ###
