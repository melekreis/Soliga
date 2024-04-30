<cfset dsn = "SoligaDSN">
<cfset username = "soligauser">
<cfset password = "mte123">

<!--- Veritabanına bağlan ve sorguyu gerçekleştir --->
<cfquery datasource="#dsn#" username="#username#" password="#password#" name="Gelen_Talepler">
    <cfprocessingdirective pageencoding="utf-8">
    
    INSERT INTO Gelen_Talepler (Isim, Soyisim, Email, Telefon, Kategori, Yardım)
    VALUES (
        <cfqueryparam value="#form.isim#" cfsqltype="cf_sql_varchar">,
        <cfqueryparam value="#form.soyisim#" cfsqltype="cf_sql_varchar">,
        <cfqueryparam value="#form.email#" cfsqltype="cf_sql_varchar">,
        <cfqueryparam value="#form.telefon#" cfsqltype="cf_sql_varchar">,
        <cfqueryparam value="#form.kategori#" cfsqltype="cf_sql_varchar">,
        <cfqueryparam value="#form.yardim#" cfsqltype="cf_sql_varchar">
    )
</cfquery>

<script>
    window.location.href="index.html#iletisim";
</script>